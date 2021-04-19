import { Navigation } from 'react-native-navigation';

import { ScreenNames } from './src/navigation';
import { App } from './src/App';

App();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: ScreenNames.ALL_FILMS
                                    }
                                },
                            ]
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: ScreenNames.FAVORITES
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })
});
