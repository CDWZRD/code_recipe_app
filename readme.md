1 - Criar uma pasta para o projeto
2 - Rodar o comando `npx create-react-app <nome do projeto>`
3 - Criar uma nova nova pasta para a API
4 - Na pasta da API:
  - Criar uma nova pasta e rodar o comando `python -m venv .<nome do projeto_venv>`
  - Ativar o .venv com o comando `source .<nome do projet_venv>/bin/active`
  - Rodar o comando `pip install django` e depois `django-admin startproject <nome da API>`
  - Entrar na pasta da API e dar o comando `django-admin startapp <nome do app>`
  - Na mesma pasta rode o comando `python manage.py runserver`
    ** Observe que irá pedir para se realizar o migrate.