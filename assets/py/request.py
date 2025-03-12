import requests
import json

url_estados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
url_municipios = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios"

response = requests.get(url_estados)
estados = response.json()

dados = []

for estado in estados:
    uf = estado['sigla']
    nome_estado = estado['nome']

    response_cidades = requests.get(url_municipios.replace("{UF}", uf))
    cidades = [cidade["nome"] for cidade in response_cidades.json()]

    dados.append({
        "estado": nome_estado,
        "uf": uf,
        "cidades": cidades
    })

with open("estados_cidades.json", "w", encoding="utf-8") as file:
    json.dump(dados, file, ensure_ascii=False, indent=4)

print("Arquivo gerado com sucesso!")