import { Navbar as Navigation, Text, useTheme, Switch, User } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  return (
    <Navigation isBordered variant="floating">
      <Navigation.Brand>
        <User src="../../assets/Dog.png" name="Huascar Mejia" size="lg" />
      </Navigation.Brand>
      <Navigation.Content hideIn="xs" gap={10} variant="highlight-rounded">
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/favorites">
          <Text>Favorites</Text>
        </Link>
        <Link to="/About">
          <Text>About</Text>
        </Link>
      </Navigation.Content>
      <Navigation.Content>
        <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
        The current theme is: {type}
      </Navigation.Content>
    </Navigation>
  );
};
