import { it, expect, describe, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import UserAccount from '../../components/UserAccount'
import '@testing-library/jest-dom/vitest';
import { User } from '../../entities';

describe('UserAccount Component', () => {
    afterEach(() => { // to clean the component after each test / it
        cleanup();
    });

    it('should show user name and edit button for admin user', () => {
        const user: User = {
            id: 15,
            name: 'John Doe',
            isAdmin: true,
        };
        render(<UserAccount user={user}/>)
        expect(screen.getByText(/name:/i)).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /edit/i})).toBeInTheDocument();
    })

    it('renders non-admin user profile with name but without edit button', () => {
        const nonAdminUser: User = {
            id: 16,
            name: 'Jane Smith',
            isAdmin: false,
        };
        render(<UserAccount user={nonAdminUser}/>)
        expect(screen.getByText(/name:/i)).toBeInTheDocument();
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument();
    })
})