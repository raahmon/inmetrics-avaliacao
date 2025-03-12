Feature: Realização de Busca e Atualização de imagem do produto Headphones

    Scenario: Realizar a busca de um produto
        Given que realizo a busca de um produto com nome Bose SoundLink Around-ear Wireless Headphones II
        Then a resposta da busca deve conter o produto com nome Bose SoundLink Around-ear Wireless Headphones II

    Scenario: Criar um novo usuário Admin
        Given que crio um novo usuário Admin
        Then o usuario deve ser criado com sucesso

    Scenario: Fazer login do usuário Admin
        Given que faço o login do usuário Admin
        Then o login deve ser realizado com sucesso

    Scenario: Atualizar a imagem do produto com sucesso
        Given que faço a atualização da imagem do produto Bose SoundLink Around-ear Wireless Headphones II
        Then a imagem do produto deve ser atualizada com sucesso

    Scenario: Deletar o usuario
        Given que faço a deleção do usuário
        Then o usuário deve ser deletado com sucesso