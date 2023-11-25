import { describe, it } from "vitest";
import { screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../../renderWithRouter";
import App from "../../App";
import  ShoppingCartProvider  from "../../context/shoppingCartProvider";
import { renderWithContext } from "../../renderWithContext";
import ShoppingCart from "../../pages/ShoppingCart";
import {mockContextValue} from '../mock/provider.mock'

describe('Testando ShoppingCart', () => {

    it('não é possível adicionar produto com valor negativo', async () => {
        renderWithRouter(
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>,
            { route: '/' }
        );

        const inputPrice = screen.getByLabelText(/Preço/i) as HTMLInputElement;
        userEvent.type(inputPrice, '-1');

        await waitFor(() => {
            const errorMessage = screen.getByRole('heading', { name: /O preço deve ser inteiro e positívo/i });
            expect(errorMessage).toBeInTheDocument();
          });

    });

    it('Não é possível cadastrar mais de 10 itens ao carrinho', async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mockContextValue.listProducts = Array.from({length: 10}).map((_,i) => i +1) as any[]
        renderWithContext(
            <ShoppingCart />,
            {
                initialValue:{ mockContextValue }
            }
            );
            const addButton = screen.getByRole('button', {name: /Adicionar/i});
            expect(addButton).toBeDisabled();
    })

    
});