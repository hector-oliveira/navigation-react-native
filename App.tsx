// ============ IMPORTAÇÃO DAS CONFIGURAÇÕES INICIAIS ============
import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

// importação das fontes da aplicação
import * as Font from 'expo-font';
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';

// importação do expo loading
import * as SplashScreen from 'expo-splash-screen';

// importação do ThemeProvider da aplicação
import { ThemeProvider } from 'styled-components/native';

// importação do tema da aplicação
import THEME from './src/theme';

// mantem o slplash screen visível enquanto carrega os recursos da aplicação
SplashScreen.preventAutoHideAsync();

// ============ IMPORTAÇÃO DAS TELAS E COMPONENTES REACT-NATIVE ============

// importação dos componentes react-native
import { StyleSheet, View } from 'react-native';

// importação das telas ou rotas da aplicação
import { Routes } from '@routes/index';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // carrega as fontes da aplicação
        await Font.loadAsync({
          Roboto_300Light,
          Roboto_300Light_Italic,
          Roboto_400Regular,
          Roboto_400Regular_Italic,
          Roboto_500Medium,
          Roboto_500Medium_Italic,
          Roboto_700Bold,
          Roboto_700Bold_Italic,
        });
        await new Promise(resover => setTimeout(resover, 2000));
      } catch (e) {
        // se houver algum erro, mostra no console
        console.warn(e);
      } finally {
        // oculta o splash screen
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady) {
    return null;
  }

  return(
    // Para que o splash da aplicação funcione corretamente,
    // é necessário que o componente view tenha o atributo onLayout
    // e que o componente ThemeProvider esteja dentro do componente view,
    // e não dentro do componente NavigationContainer
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* O ThemeProvider é responsável por passar */}
      {/* todo theme da aplicação */}
      <ThemeProvider theme={THEME}>
        {/* O componente Routes é responsável por */}
        {/* renderizar as rotas da aplicação */}
        <Routes />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  // O componente view precisa preencher
  // toda a tela da aplicação, por tanto
  // o atributo flex: 1 é atribuido.
  container: {
    flex: 1,
  }
});