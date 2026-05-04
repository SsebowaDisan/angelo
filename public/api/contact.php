<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Alleen POST-aanvragen zijn toegestaan.']);
    exit;
}

$rawInput = file_get_contents('php://input') ?: '';
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['message' => 'Ongeldige aanvraag.']);
    exit;
}

function clean_contact_field(mixed $value, int $maxLength = 2000): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);
    $value = str_replace(["\r", "\0"], '', $value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function reject_header_injection(string $value): bool
{
    return str_contains($value, "\n") || str_contains($value, "\r");
}

$name = clean_contact_field($data['name'] ?? '', 120);
$email = clean_contact_field($data['email'] ?? '', 180);
$phone = clean_contact_field($data['phone'] ?? '', 80);
$message = clean_contact_field($data['message'] ?? '', 4000);

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Naam, e-mail en bericht zijn verplicht.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || reject_header_injection($email)) {
    http_response_code(400);
    echo json_encode(['message' => 'Geef een geldig e-mailadres op.']);
    exit;
}

if (reject_header_injection($name)) {
    http_response_code(400);
    echo json_encode(['message' => 'Naam bevat ongeldige tekens.']);
    exit;
}

$recipient = 'info@angelorenovates.be';
$subject = 'Nieuwe contactaanvraag van ' . $name;
$safePhone = $phone !== '' ? $phone : 'Niet opgegeven';

$body = implode("\n", [
    'Nieuwe contactaanvraag via angelorenovates.be',
    '',
    'Naam: ' . $name,
    'E-mail: ' . $email,
    'Telefoon: ' . $safePhone,
    '',
    'Bericht:',
    $message,
]);

$headers = [
    'From: Angelo Renovates <noreply@angelorenovates.be>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['message' => 'Bericht kon niet verzonden worden. Probeer het later opnieuw.']);
    exit;
}

$confirmationSubject = 'We hebben uw bericht ontvangen';
$confirmationBody = implode("\n", [
    'Beste ' . $name,
    '',
    'Bedankt voor uw bericht via angelorenovates.be.',
    'Wij hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.',
    '',
    'Uw bericht:',
    $message,
    '',
    'Met vriendelijke groeten,',
    'Angelo Renovates',
]);

$confirmationHeaders = [
    'From: Angelo Renovates <noreply@angelorenovates.be>',
    'Reply-To: info@angelorenovates.be',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

mail($email, $confirmationSubject, $confirmationBody, implode("\r\n", $confirmationHeaders));

echo json_encode(['message' => 'Bericht succesvol verzonden.']);
