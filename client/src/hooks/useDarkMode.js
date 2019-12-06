import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {
    const [dkMode, setDkMode] = useLocalStorage('dkMode');

    useEffect(() => {
        if(dkMode){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [dkMode])

    return [dkMode, setDkMode];
}