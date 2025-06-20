<?php
// Define o caminho do arquivo JSON
$arquivoJson = 'lojas.json';

// Recebe os dados brutos da requisição
$dadosRecebidos = file_get_contents('php://input');

// Converte JSON para array PHP
$novaLoja = json_decode($dadosRecebidos, true);

// Se o JSON estiver inválido
if ($novaLoja === null) {
    http_response_code(400);
    echo json_encode(["status" => "erro", "mensagem" => "JSON inválido"]);
    exit;
}

// Lê o conteúdo atual do arquivo JSON (se existir)
if (file_exists($arquivoJson)) {
    $conteudoAtual = file_get_contents($arquivoJson);
    $listaLojas = json_decode($conteudoAtual, true);
    
    // Se o arquivo estiver vazio ou corrompido
    if (!is_array($listaLojas)) {
        $listaLojas = [];
    }
} else {
    $listaLojas = [];
}

// Adiciona a nova loja ao array existente
$listaLojas[] = $novaLoja;

// Salva o array atualizado de volta no JSON
if (file_put_contents($arquivoJson, json_encode($listaLojas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode(["status" => "sucesso", "mensagem" => "Loja salva com sucesso!"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "erro", "mensagem" => "Falha ao salvar a loja"]);
}
?>
