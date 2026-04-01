# Projeto SeuMEI

Landing page em Angular + Bootstrap, backend em Java Spring Boot e banco PostgreSQL.

## Subir com Docker Compose

```bash
docker compose up --build
```

## URLs

- Frontend: http://localhost:4200
- Backend: http://localhost:8080/api/services
- PostgreSQL: localhost:5432

## Serviços expostos

- `GET /api/services`
- `GET /api/testimonials`
- `POST /api/leads`

### Exemplo de POST `/api/leads`

```json
{
  "name": "Rebecca",
  "email": "rebecca@email.com",
  "phone": "(22) 99999-9999",
  "serviceInterest": "Abrir MEI",
  "message": "Quero ajuda para abrir meu MEI"
}
```

## Observações

- O banco já sobe com tabelas básicas e dados iniciais.
- O backend também faz seed automático dos cards e depoimentos via `data.sql`.
