# GESTOS DE ADASALON

## 1. Swipe para eliminar clientes
Permite deslizar un cliente para mostrar la opción de eliminarlo.

- Archivo: clientes.page.html
- Función: eliminarCliente()
- Ubicación: src/app/clientes/

## 2. Pull-to-refresh
Permite deslizar hacia abajo para actualizar la lista de clientes.

- Archivo: clientes.page.html
- Función: actualizarClientes()
- Ubicación: src/app/clientes/

## 3. Long-press
Permite mantener presionado un cliente durante 800 milisegundos para mostrar sus opciones.

- Archivo: clientes.page.ts
- Funciones: iniciarPulsacion(), cancelarPulsacion(), mostrarOpciones()
- Ubicación: src/app/clientes/

## 4. Pinch-to-zoom
Permite ampliar y reducir los productos utilizando dos dedos.

- Archivo: productos.page.html
- Funciones: iniciarZoom(), moverZoom(), finalizarZoom(), restablecerZoom()
- Ubicación: src/app/productos/
