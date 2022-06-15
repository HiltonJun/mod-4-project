'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mod-4-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' : 'data-target="#xs-controllers-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' :
                                            'id="xs-controllers-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' : 'data-target="#xs-injectables-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' :
                                        'id="xs-injectables-links-module-AppModule-70f0e4a96bc6c8c9b83820e2146548efb993291a04246e8935fc85a3e2532ec0c78cbd447d7907f3ba88e88470e11776a2945ba7ce8c9173fd0b13fffeb6c86d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' : 'data-target="#xs-controllers-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' :
                                            'id="xs-controllers-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' : 'data-target="#xs-injectables-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' :
                                        'id="xs-injectables-links-module-AuthModule-4e410aa135dc6fa4864d63010a9d8d1a498e38e05c6c8bff601e55cad229d9818b740fd0004e5caf2700a406dd7462acf109c7ff879754ac72e877a56d1fe1c4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoriteModule.html" data-type="entity-link" >FavoriteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' : 'data-target="#xs-controllers-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' :
                                            'id="xs-controllers-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' }>
                                            <li class="link">
                                                <a href="controllers/FavoriteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' : 'data-target="#xs-injectables-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' :
                                        'id="xs-injectables-links-module-FavoriteModule-e6ee0b8c541048404291beb78d21e0cd1cbd231b5387438230144663a873395858f175535ab8a50d40ef73a9ee2b5779bca6f2e6bb8a4dd9037d87f31079c77a"' }>
                                        <li class="link">
                                            <a href="injectables/FavoriteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoriteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' : 'data-target="#xs-controllers-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' :
                                            'id="xs-controllers-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' : 'data-target="#xs-injectables-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' :
                                        'id="xs-injectables-links-module-GameModule-b188b67e038d9092e78f6f78f517f0cca42fd0dfc326a100e37d57aa7b198acbb18a40bcecf7fe7770ca9644a6fd264f504f123ff8e95de73377128c50d47c95"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GenerosModule.html" data-type="entity-link" >GenerosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' : 'data-target="#xs-controllers-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' :
                                            'id="xs-controllers-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' }>
                                            <li class="link">
                                                <a href="controllers/GenerosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' : 'data-target="#xs-injectables-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' :
                                        'id="xs-injectables-links-module-GenerosModule-747f180a50ee399b8b3e5d1ddd288ad4242b0ad57d52d8c4b70520307c613b7d06153a53072abd92d64ead72f1caad098072b150457003f7b3a05cda6fa49cab"' }>
                                        <li class="link">
                                            <a href="injectables/GenerosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomepageModule.html" data-type="entity-link" >HomepageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' : 'data-target="#xs-controllers-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' :
                                            'id="xs-controllers-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' }>
                                            <li class="link">
                                                <a href="controllers/HomepageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' : 'data-target="#xs-injectables-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' :
                                        'id="xs-injectables-links-module-HomepageModule-77ebc4417c3981e6d2c9fa6394eb810d97c88ddad0b17a78c800f8fc113507fb1b29383a2dc9eb804a3f2edffe7f8bbcd45dea32885bf6d9ffc922888743cc67"' }>
                                        <li class="link">
                                            <a href="injectables/HomepageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilModule.html" data-type="entity-link" >PerfilModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' : 'data-target="#xs-controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' :
                                            'id="xs-controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                            <li class="link">
                                                <a href="controllers/PerfilController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' : 'data-target="#xs-injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' :
                                        'id="xs-injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                        <li class="link">
                                            <a href="injectables/PerfilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' : 'data-target="#xs-controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' :
                                            'id="xs-controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' : 'data-target="#xs-injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' :
                                        'id="xs-injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FavoriteController.html" data-type="entity-link" >FavoriteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameController.html" data-type="entity-link" >GameController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GenerosController.html" data-type="entity-link" >GenerosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HomepageController.html" data-type="entity-link" >HomepageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PerfilController.html" data-type="entity-link" >PerfilController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateFavoriteDto.html" data-type="entity-link" >CreateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGeneroDto.html" data-type="entity-link" >CreateGeneroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePerfilDto.html" data-type="entity-link" >CreatePerfilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genero.html" data-type="entity-link" >Genero</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Perfil.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFavoriteDto.html" data-type="entity-link" >UpdateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGameDto.html" data-type="entity-link" >UpdateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneroDto.html" data-type="entity-link" >UpdateGeneroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePerfilDto.html" data-type="entity-link" >UpdatePerfilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoriteService.html" data-type="entity-link" >FavoriteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerosService.html" data-type="entity-link" >GenerosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomepageService.html" data-type="entity-link" >HomepageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfilService.html" data-type="entity-link" >PerfilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});