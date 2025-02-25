# Quantix - Sistema de Gestión de Inventario

Quantix es un sistema de gestión de inventario diseñado para optimizar la administración de productos, ventas y créditos en tiendas locales. Permite un control eficiente del stock, generación de reportes y gestión de clientes con créditos pendientes.

## Características Principales
- **Gestión de Inventario:** Administración de productos, proveedores y niveles de stock.
- **Módulo de Ventas:** Registro de ventas con generación de facturas.
- **Control de Créditos:** Seguimiento de clientes y saldos pendientes.
- **Gestión de Usuarios:** Roles de administrador y vendedor con permisos diferenciados.
- **Reportes y Análisis:** Generación de informes sobre ventas, inventario y clientes.

## Arquitectura y Tecnologías
El sistema sigue una arquitectura cliente-servidor con las siguientes tecnologías:
- **Backend:** Java con Spring Boot
- **Base de Datos:** MySQL
- **Frontend:** HTML, CSS y JavaScript
- **Control de Versiones:** Git y GitHub

## Instalación y Configuración
### Prerrequisitos
- Tener instalado **Java 17** o superior
- MySQL configurado con un usuario y base de datos
- Node.js y npm (para el frontend, si aplica)

### Pasos de Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/quantix.git
   cd quantix
   ```
2. Configurar el backend:
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```
3. Configurar el frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```
4. Acceder a la aplicación en el navegador en `http://localhost:8080`

## Uso del Sistema
- **Inicio de Sesión:** Acceso con credenciales según el rol asignado.
- **Gestión de Productos:** Crear, editar y eliminar productos.
- **Registrar Ventas:** Añadir productos y generar facturas.
- **Administrar Créditos:** Verificar clientes con deudas y registrar pagos.
- **Generar Reportes:** Obtener análisis sobre ventas e inventario.

## Contribuciones y Contacto
Si deseas contribuir al desarrollo de Quantix, sigue estas reglas:
1. Realizar un fork del repositorio.
2. Crear una nueva rama para los cambios.
3. Enviar un pull request con una descripción detallada.


