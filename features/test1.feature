Feature: Google
    Nessa funcionalidade iremos realizar pesquisas e validações no Google.
    @google @youtube
    Scenario: Pesquisar por YouTube
        Neste cenário iremos acessar o Google e pesquisar por YouTube e validar o título do resultado
        por "YouTube - Pesquisa Google".
        Given I am on "https://www.google.com.br"
        When I maximize the browser window
        Then I assert to be in "Google"
        And I fill the "name: q" field with "YouTube"
        And I click on "name: btnK"
        And I assert to be in "YouTube - Pesquisa Google"
    
    @google @crunchyroll
    Scenario: Pesquisar por Crunchyroll
        Neste cenário iremos acessar o Google e pesquisar por Crunchyroll e validar o título do resultado
        por "Crunchyroll - Pesquisa Google".
        Given I am on "https://www.google.com.br"
        When I maximize the browser window
        Then I assert to be in "Google"
        And I fill the "name: q" field with "Crunchyroll"
        And I click on "name: btnK"
        And I assert to be in "Crunchyroll - Pesquisa Google"
    
    @google @github
    Scenario: Pesquisar por GitHub
        Neste cenário iremos acessar o Google e pesquisar por GitHub e validar o título do resultado
        por "GitHub - Pesquisa Google".
        Given I am on "https://www.google.com.br"
        When I maximize the browser window
        Then I assert to be in "Google"
        And I fill the "name: q" field with "GitHub"
        And I click on "name: btnK"
        And I assert to be in "GitHub - Pesquisa Google"