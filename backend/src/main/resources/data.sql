INSERT INTO service_items (title, description, icon, cta_label)
SELECT 'Abrir MEI', 'Ajudamos você a formalizar seu negócio com rapidez e segurança.', 'bi-briefcase', 'Quero abrir meu MEI'
WHERE NOT EXISTS (SELECT 1 FROM service_items WHERE title = 'Abrir MEI');

INSERT INTO service_items (title, description, icon, cta_label)
SELECT 'Emitir DAS', 'Organize seus pagamentos mensais e evite atrasos e juros.', 'bi-receipt', 'Quero emitir meu DAS'
WHERE NOT EXISTS (SELECT 1 FROM service_items WHERE title = 'Emitir DAS');

INSERT INTO service_items (title, description, icon, cta_label)
SELECT 'Nota Fiscal', 'Suporte para emissão de notas e orientação sobre obrigações do MEI.', 'bi-file-earmark-text', 'Quero emitir nota'
WHERE NOT EXISTS (SELECT 1 FROM service_items WHERE title = 'Nota Fiscal');

INSERT INTO service_items (title, description, icon, cta_label)
SELECT 'Regularização', 'Consulta de pendências, débitos e apoio para colocar tudo em dia.', 'bi-shield-check', 'Quero regularizar'
WHERE NOT EXISTS (SELECT 1 FROM service_items WHERE title = 'Regularização');

INSERT INTO testimonials (customer_name, city, message)
SELECT 'Mariana Souza', 'Nova Friburgo/RJ', 'Consegui abrir meu MEI e organizar os pagamentos sem dor de cabeça.'
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE customer_name = 'Mariana Souza');

INSERT INTO testimonials (customer_name, city, message)
SELECT 'Carlos Mendes', 'Rio de Janeiro/RJ', 'Atendimento rápido, claro e me ajudou com DAS e nota fiscal.'
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE customer_name = 'Carlos Mendes');

INSERT INTO testimonials (customer_name, city, message)
SELECT 'Juliana Costa', 'Niterói/RJ', 'A plataforma me passou segurança e economizou muito tempo.'
WHERE NOT EXISTS (SELECT 1 FROM testimonials WHERE customer_name = 'Juliana Costa');
