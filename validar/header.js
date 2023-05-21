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
                        <span class="icon user-3" aria-hidden="true"></span>Usuarios
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                      <li>
                          <a href="Registrar-Usuarios.html">Registrar Usuarios</a>
                      </li>
                      <li>
                          <a href="Listar-Usuarios.html">Listar Usuarios</a>
                      </li>
                      <li>
                        <a href="Actualizar-Usuario.html">Actualizar Usuarios</a>
                    </li>
                  </ul>
              </li>
              <li>
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon folder" aria-hidden="true"></span>Roles
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                      <li>
                          <a href="Registrar-Roles.html">Crear Rol</a>
                      </li>
                      <li>
                          <a href="Listar-Roles.html">Listar Roles</a>
                      </li>
                      <li>
                        <a href="Actualizar-Roles.html">Actualizar Roles</a>
                    </li>
                  </ul>
              </li>
              <li>
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
                            <a href="Registrar-Insumos.html">Registrar Insumos</a>
                        </li>
                        <li>
                            <a href="Listar-Insumos.html">Listar Insumos</a>
                        </li>
                        <li>
                          <a href="Actualizar-Insumos.html">Actualizar Insumos</a>
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
                          <a href="fitec-01.html">Registrar Ficha Técnica</a>
                      </li>
                      <li>
                          <a href="fitec-02.html">Listar Ficha Técnica</a>
                      </li>
                      <li>
                        <a href="fitec-03.html">Actualizar Ficha Técnica</a>
                    </li>
                  </ul>
              </li>
                <li>
                    <a class="show-cat-btn" href="##">
                      <span class="icon fa-archive" aria-hidden="true"></span>Productos
                      <span class="category__btn transparent-btn" title="Open list">
                          <span class="sr-only">Open list</span>
                          <span class="icon arrow-down" aria-hidden="true"></span>
                      </span>
                  </a>
                  <ul class="cat-sub-menu">
                      <li>
                          <a href="prod-01.html">Registrar Productos</a>
                      </li>
                      <li>
                          <a href="prod-02.html">Listar Productos</a>
                      </li>
                      <li>
                        <a href="prod-03.html">Actualizar Productos</a>
                    </li>
                  </ul>
              </li>
                    <a class="show-cat-btn" href="##">
                      <span class="icon fa-archive" aria-hidden="true"></span>Compras
                      <span class="category__btn transparent-btn" title="Open list">
                          <span class="sr-only">Open list</span>
                          <span class="icon arrow-down" aria-hidden="true"></span>
                      </span>
                  </a>
                  <ul class="cat-sub-menu">
                      <li>
                          <a href="Registrar-Compras.html">Registrar Compras</a>
                      </li>
                      <li>
                          <a href="Listar-Compras.html">Listar Compras</a>
                      </li>
                      <li>
                        <a href="Actualizar-Compras.html">Actualizar Compras</a>
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
                    <li>
                      <a href="Actualizar-Ventas.html">Actualizar Ventas</a>
                  </li>
                </ul>
            </li>
                  <a class="show-cat-btn" href="##">
                    <span class="icon fa-archive" aria-hidden="true"></span>Clientes
                    <span class="category__btn transparent-btn" title="Open list">
                        <span class="sr-only">Open list</span>
                        <span class="icon arrow-down" aria-hidden="true"></span>
                    </span>
                </a>
                <ul class="cat-sub-menu">
                    <li>
                        <a href="clie-01.html">Registrar Clientes</a>
                    </li>
                    <li>
                        <a href="clie-02.html">Listar Clientes</a>
                    </li>
                    <li>
                      <a href="clie-03.html">Actualizar Clientes</a>
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
                    <a class="show-cat-btn" href="##">
                        <span class="icon category" aria-hidden="true"></span>Extentions
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="extention-01.html">Extentions-01</a>
                        </li>
                        <li>
                            <a href="extention-02.html">Extentions-02</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="show-cat-btn" href="##">
                        <span class="icon user-3" aria-hidden="true"></span>Users
                        <span class="category__btn transparent-btn" title="Open list">
                            <span class="sr-only">Open list</span>
                            <span class="icon arrow-down" aria-hidden="true"></span>
                        </span>
                    </a>
                    <ul class="cat-sub-menu">
                        <li>
                            <a href="users-01.html">Users-01</a>
                        </li>
                        <li>
                            <a href="users-02.html">Users-02</a>
                        </li>
                    </ul>
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