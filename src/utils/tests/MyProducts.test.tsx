import { describe, it } from "vitest";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ShoppingCartProvider from "../../context/shoppingCartProvider";
import mockShoppingCartProvider from "../mock/provider.mock";
import renderWithRouter from "../../renderWithRouter";
import App from "../../App";


describe('Testando MyProducts', () => {

    beforeEach(() => {
        mockShoppingCartProvider(); 
    });

    it('adiciona quantidade corretamente', () => {
        
           
        const addButton = screen.getByRole('button', { name: '+' });
        userEvent.click(addButton);

        const productQuantity = screen.getByText('1');
        expect(productQuantity).toBeInTheDocument();
    });

    it('remove quantidade corretamente', () => {
       renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            {route: '/myProducts'}
        );

        const addButton = screen.getByRole('button', { name: '+' });
        userEvent.click(addButton);

        const removeButton = screen.getByRole('button', { name: '-' });
        userEvent.click(removeButton);

        const productQuantity = screen.queryByText('1'); 
        expect(productQuantity).toBeNull();
    });

    it('calcula o total corretamente', () => {
       renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            {route: '/myProducts'}
        );

        const addButton = screen.getByRole('button', { name: '+' });
        userEvent.click(addButton);

        const totalValue = screen.getByText(/Total:/i);
        expect(totalValue).toHaveTextContent('R$');
    });

    it('renderiza notas necessárias corretamente', () => {
       renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            {route: '/myProducts'}
        );

        const addButton = screen.getByRole('button', { name: '+' });
        userEvent.click(addButton);

        const notaImage = screen.getByAltText('nota-de-dinheiro');
        expect(notaImage).toBeInTheDocument();
    });

});

// tenho que cobrir os cálculos de total
// numero de notas (definir na mão);
// a lista só pode ter 10 itens

// quando não tiver nada no carrinho, mostre uma msg de "carrinho vazio"