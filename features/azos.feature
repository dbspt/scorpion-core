Feature: Azos Seguros
    Nessa funcionalidade iremos testar passo-a-passo simulação de seguro Azos.
    @azos
    Scenario: Simulação
        Neste cenário iremos testar a simulação de seguro Azos.
        Given I am on "https://www.azos.com.br"
        When I maximize the browser window
        Then I assert to be in "Azos | Seguro de vida para você"
        And I click on "id: simulationLink1"
        And I assert to be in "Simule o seu seguro | Azos - Um seguro para a sua vida"
        And I fill the "name: birth_date" field with "14/06/1994"
        And I click on "xpath: //button[text()='Continuar']"
        And I click on "xpath: //div[text()='Masculino']/../../button"
        And I fill the "name: height" field with "1.70"
        And I fill the "name: weight" field with "68"
        And I click on "xpath: //button[text()='Continuar']"
        And I click on "xpath: //div[text()='Não']/../../button"
        And I fill the "xpath: //label[text()='Profissão']/../div/input" field with "Desenvolvedor"
        And I click on "xpath: //div[@role='presentation']"
        And I click on "xpath: //button[text()='Continuar']"
        And I click on "xpath: //div[text()='Acima de R$ 10.000,00']/../../button"
        And I wait for the "xpath: //strong[text()='Seguro de Vida']" element to be visible