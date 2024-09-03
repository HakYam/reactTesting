import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../components/Greet'
import '@testing-library/jest-dom/vitest'; // /jest for jest

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet  name='Ali'/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Ali/i) // i for case sensative so aLi Ali and all other will pass
    })

    it('should render login button when name is not provided', () => {
        render(<Greet/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
})