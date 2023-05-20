import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation }
    from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('is collapsed on render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('is not collapsed when button pressed', () => {
        render(<Sidebar />);

        const button = screen.getByTestId('sidebar-button');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
