

import { ThemeProvider } from './theme/ThemeProvider';
import StackNavigation from './navigation/StackNavigation';
import {AuthProvider} from "./Context/AuthProvider";

export default function App() {

  return (
    <ThemeProvider>
        <AuthProvider>
         <StackNavigation />
        </AuthProvider>
    </ThemeProvider >
  );
}


