import { describe, it } from "vitest";
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../../renderWithRouter";
import App from "../../App";
import mockShoppingCartProvider from "../mock/provider.mock";
import  ShoppingCartProvider  from "../../context/shoppingCartProvider";

describe('Testando ShoppingCart', () => {
    beforeEach(() => {
        mockShoppingCartProvider(); 
    });

    it('Verifica se a tela foi renderizada', () => {
        renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            { route: '/' }
        );

        const title = screen.getByRole('heading', { name: /Carrinho de compras/i });
        expect(title).toBeInTheDocument();
    });

    it('input "Produto" funciona corretamente', async () => {
        renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            { route: '/' }
        );
        const inputProduct = screen.getByLabelText(/Produto/i) as HTMLInputElement;

        expect(inputProduct).toBeInTheDocument();

        userEvent.type(inputProduct, 'Mouse Gamer');

        await waitFor(() => {
            expect(inputProduct.value).toBe('Mouse Gamer');
        });
    });

    it('input "Preço" funciona corretamente', async () => {
        renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            { route: '/' }
        );

        const inputPrice = screen.getByLabelText(/Preço/i) as HTMLInputElement;

        expect(inputPrice).toBeInTheDocument();

        userEvent.type(inputPrice, '235');

        await waitFor(() => {
            expect(inputPrice.value).toEqual('235');
        });
    });
    it('adiciona produto ao carrinho corretamente', async () => {
        renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            { route: '/' }
        );

        const inputProduct = screen.getByLabelText(/Produto/i) as HTMLInputElement;
        const inputPrice = screen.getByLabelText(/Preço/i) as HTMLInputElement;
        userEvent.type(inputProduct, 'Mouse Gamer');
        userEvent.type(inputPrice, '235');
        
        const addToCartButton = screen.getByRole('heading', { name: /Carrinho de compras/i });
        userEvent.click(addToCartButton);

        expect(inputProduct.value).toBe('');
        expect(inputPrice.value).toBe('');

    });
    
});