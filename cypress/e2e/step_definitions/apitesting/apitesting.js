import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

let token;
let Userid;

Given('que realizo a busca de um produto com nome Bose SoundLink Around-ear Wireless Headphones II', () => {
    cy.request(
        "GET",
        'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=Bose%20SoundLink%20Around-ear%20Wireless%20Headphones%20II&quantityPerEachCategory=-1'
    ).then((response) => {
        cy.wrap(response).as('searchResponse');
    });
})
Then('a resposta da busca deve conter o produto com nome Bose SoundLink Around-ear Wireless Headphones II', () =>{
    cy.get('@searchResponse').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.isOkStatusCode).to.eq(true);
        expect(response.statusText).to.eq('OK');
        expect(response.body[0].products[0].productName).to.eq("Bose SoundLink Around-ear Wireless Headphones II");;

    })
})


Given('que crio um novo usuário Admin', () => {
    cy.fixture('createUser.json').then((bodyCreateUser) => {
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
            headers: {
                accept: '*/*',
                'Contente-Type': 'application/json',
            },
            body: bodyCreateUser,
        }).then((response) => {
            cy.wrap(response).as('createUser')
        })
    })
})

Then('o usuario deve ser criado com sucesso', () => {
    cy.get('@createUser').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.response.success).to.eq(true);
        expect(response.body.response.reason).to.eq('New user created successfully.');

    })
})
Given('que faço o login do usuário Admin', () => {
    cy.fixture('loginBody.json').then((bodyLoginUser) => {
        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: bodyLoginUser,
        }).then((response) => {
            token = response.body.statusMessage.token;
            Userid = response.body.statusMessage.userId;
            cy.wrap(response).as('loginResponse');
        });
    });
});

Then('o login deve ser realizado com sucesso', () => {
    cy.get('@loginResponse').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.statusMessage.reason).to.eq('Login Successful');
        expect(response.body.statusMessage.token).to.eq(token);
        expect(response.body.statusMessage.userId).to.eq(Userid);
    });
});
Given('que faço a atualização da imagem do produto Bose SoundLink Around-ear Wireless Headphones II', () => {
    cy.fixture('pato.jpg', 'base64').then((fileContent) => {
        const fileBlob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
        const formData = new FormData();
        formData.append('file', fileBlob, 'pato.jpg');
        formData.append('color', '414141');
        formData.append('product_id', '13');
        formData.append('source', 'test');
        formData.append('userId', Userid);

        cy.request({
            method: 'POST',
            url: `www.advantageonlineshopping.com/catalog/api/v1/product/image/${Userid}/test/414141?product_id=13`,
            headers: {
                accept: '*/*',
                Authorization: `Bearer ${token}`,
            },
            body: formData,
            responseType: 'arraybuffer',
        }).then((response) => {
            cy.wrap(response).as('updateImageResponse');
        });
    });
});
Then('a imagem do produto deve ser atualizada com sucesso', () => {
    cy.get('@updateImageResponse').then((response) => {
        expect(response.status).to.eq(200);
        const decoder = new TextDecoder('utf-8');
        const jsonResponse = decoder.decode(response.body);
        const json = JSON.parse(jsonResponse);

        expect(json.success).to.eq(true);
        expect(json.imageColor).to.eq('414141');
        expect(json.reason).to.eq('Product was updated successful');
    });
});


































Given('que faço a deleção do usuário', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/delete',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: {
            accountId: Userid,
        },
    }).then((response) => {
        cy.wrap(response).as('deleteUserResponse');
    });
});

Then('o usuário deve ser deletado com sucesso', () => {
    console.log(Userid)
    cy.get('@deleteUserResponse').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.statusMessage.success).to.eq(true);
        expect(response.body.statusMessage.reason).to.eq('Account(orders, address, payment, account) deleted completely and permanently ');
    });
});
