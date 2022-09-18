import App from "./App.ts";
import storageService from "./StorageService.ts";

window.addEventListener('load', (e) => {
    // to handle the splash screen at first
    // it's only once
    if (storageService.get('@HANOI_SEEN').length > 0) {
        setTimeout(() => {
            document.querySelector('.loader')?.classList.add('hidden');
            storageService.set('@HANOI_SEEN', '1');
        }, 2000); 
    } else {
        const loader = document.querySelector('.loader') as HTMLDivElement;
        loader.style.transition = "none";
        loader.classList.add('hidden');
    }
    const app = new App(storageService);
    app.init();
    app.handleEvents();    
});