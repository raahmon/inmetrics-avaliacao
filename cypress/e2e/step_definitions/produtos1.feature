Feature: Pesquisa de produto


Scenario: Realizar a busca de um produto
    Given Que estou na pagina inicial da loja
    When Realizo a busca do produto HP ELITEPAD 1000 G2 TABLET
    And Adiciono o produto HP ELITEPAD 1000 G2 TABLET ao carrinho
    Then Acesso a tela de pagamento
    And Valido que o produto HP ELITEPAD 1000 G2 TABLET está presente no carrinho