const header= document.querySelector("aside");

header.innerHTML=`
<div class="sidebar-start">
        <div class="sidebar-head">
            <a href="index.html" class="logo-wrapper" title="Home">
                <span class="sr-only">Home</span>
                <span class="icon logo" aria-hidden="true"></span>
                <div class="logo-text">
                    <span class="logo-title">PubliGrafit</span>
                  
                </div>

            </a>
            <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                <span class="sr-only">Toggle menu</span>
                <span class="icon menu-toggle" aria-hidden="true"></span>
            </button>
        </div>
        <div class="sidebar-body">
            <ul class="sidebar-body-menu">
                <li>
                    <a class="active" href="index.html"><span class="icon home" aria-hidden="true"></span>Dashboard</a>
                </li>
          
                
                <li>
                    <a class="show-cat-btn" href="##">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="20" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16" style="margin-left: -7.5px;">
                        <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
                      </svg>Insumos
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                       
                        <li>
                            <a href="Listar-Insumos.html">Listar Insumos</a>
                        </li>
                   
                    </ul>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon paper" aria-hidden="true"></span>Ficha Técnica
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                      
                      <li>
                          <a href="Listar-Ficha-Tecnica.html">Listar Ficha Técnica</a>
                      </li>
                     
                  </ul>
              </li>
                <li>
                    <a class="show-cat-btn" href="##">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="20" fill="currentColor" class="bi bi-box2-fill" viewBox="0 0 16 16" style="margin-left: -10px;">
                    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"/>
                </svg>Productos
                      <span class="category__btn transparent-btn" title="Open list">
                          <span class="sr-only">Open list</span>
                          <span class="icon arrow-down" aria-hidden="true"></span>
                      </span>
                  </a>
                  <ul class="cat-sub-menu">
                     
                      <li>
                          <a href="Listar-Productos.html">Listar Productos</a>
                      </li>
                     
                  </ul>
              </li>
                    <a class="show-cat-btn" href="##">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="22" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16" style="margin-left: -10px;">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                  </svg>Compras
                      <span class="category__btn transparent-btn" title="Open list">
                          <span class="sr-only">Open list</span>
                          <span class="icon arrow-down" aria-hidden="true"></span>
                      </span>
                  </a>
                  <ul class="cat-sub-menu">
                     
                      <li>
                          <a href="Listar-Compras.html">Listar Compras</a>
                      </li>
                    
                  </ul>
              </li>
                  <a class="show-cat-btn" href="##">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="20" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16" style="margin-left: -10px;">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg>Ventas
                    <span class="category__btn transparent-btn" title="Open list">
                        <span class="sr-only">Open list</span>
                        <span class="icon arrow-down" aria-hidden="true"></span>
                    </span>
                </a>
                <ul class="cat-sub-menu">
                    <li>
                        <a href="Registrar-Ventas.html">Registrar Ventas</a>
                    </li>
                    <li>
                        <a href="Listar-Ventas.html">Listar Ventas</a>
                    </li>
                    
                </ul>
            </li>
                  <a class="show-cat-btn" href="##">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="20" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16" style="margin-left: -10px;">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>Clientes
                    <span class="category__btn transparent-btn" title="Open list">
                        <span class="sr-only">Open list</span>
                        <span class="icon arrow-down" aria-hidden="true"></span>
                    </span>
                </a>
                <ul class="cat-sub-menu">
                    <li>
                        <a href="Registrar-Clientes.html">Registrar Clientes</a>
                    </li>
                    <li>
                        <a href="Listar-Clientes.html">Listar Clientes</a>
                    </li>
                    <li>
                      <a href="Actualizar-Clientes.html">Actualizar Clientes</a>
                  </li>
                </ul>
            </li>
                    <a href="comments.html">
                        <span class="icon message" aria-hidden="true"></span>
                        Comments
                    </a>
                    <span class="msg-counter">7</span>
                </li>
            </ul>
            <span class="system-menu__title">system</span>
            <ul class="sidebar-body-menu">
                <li>
                    <a href="appearance.html"><span class="icon edit" aria-hidden="true"></span>Appearance</a>
                </li>
                
                
                <li>
                    <a href="##"><span class="icon setting" aria-hidden="true"></span>Settings</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="sidebar-footer">
        <a href="##" class="sidebar-user">
            <span class="sidebar-user-img">
                <picture><source srcset="./img/avatar/avatar-illustrated-01.webp" type="image/webp"><img src="./img/avatar/avatar-illustrated-01.png" alt="User name"></picture>
            </span>
            <div class="sidebar-user-info">
                <span class="sidebar-user__title">Nafisa Sh.</span>
                <span class="sidebar-user__subtitle">Support manager</span>
            </div>
        </a>
    </div>

`;