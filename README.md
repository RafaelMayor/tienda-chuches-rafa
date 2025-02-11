<div align='right'>

### **Rafael Martín Mayor**

</div>

# **Tienda de Chuches - Documentación del Frontend**  

## **1. Introducción**  
La tienda de chuches es una aplicación web desarrollada con **Vue 3**, que permite a los usuarios comprar golosinas y a los administradores gestionar los productos.  

### **Tecnologías utilizadas:**  
- **Vue 3** con **Composition API**  
- **TypeScript**  
- **Vue Router** (para la navegación)  
- **Pinia** (para la gestión del estado)  
- **Firebase** (Autenticación y base de datos)  
- **Vitest** (para pruebas unitarias)  
- **Bootstrap** y **CSS** (para el diseño visual)  

---

## **2. Funcionalidades**  

### **Usuarios**  
- **Registro e inicio de sesión** con email y contraseña.  
- Cada usuario inicia con **3000€ de crédito**.  
- **Añadir productos al carrito** y gestionar la cantidad.  
- **Compra de productos**, con validación de stock y crédito.  

### **Administradores**  
- **Añadir, editar y eliminar productos** desde un panel de administración.  
- **Gestión de stock** de cada producto.  

---

## **3. Estructura del Proyecto**  
```
/tienda-chuches
├── /src
│   ├── /assets
│   │   ├── styles.css
│   │   ├── logo.png
│   ├── /components
│   │   ├── NavBar.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductList.vue
│   │   ├── Cart.vue
│   │   ├── AdminPanel.vue
│   ├── /views
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   ├── Signup.vue
│   │   ├── Admin.vue
│   │   ├── NotFound.vue
│   ├── /store
│   │   ├── auth.ts
│   │   ├── products.ts
│   │   ├── cart.ts
│   ├── /composables
│   │   ├── useFirebase.ts
│   ├── App.vue
│   ├── main.ts
│   ├── router.ts
├── /public
│   ├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
```

---

## **4. Descripción de los Componentes**  

### **Navbar.vue**
- Contiene la barra de navegación con enlaces a **Inicio**, **Carrito** y **Login**.  
- Muestra el crédito del usuario autenticado.  

### **ProductCard.vue**
- Componente reutilizable que muestra **nombre, imagen, precio y stock** de un producto.  
- Botón para **añadir al carrito**.  

### **Cart.vue**
- Muestra los productos agregados al carrito.  
- Permite modificar la cantidad y realizar la **compra**.  
- Valida que el usuario tenga **crédito suficiente** y que haya **stock disponible**.  

### **Home.vue**
- Página principal que muestra **todos los productos** en tarjetas.  

### **Login.vue y Signup.vue**
- Formularios de autenticación con Firebase.  

### **Admin.vue**
- Permite a los administradores **añadir, editar y eliminar productos**.  

---

## **5. Gestión del Estado (Pinia)**  

### **`auth.ts` (store de autenticación)**  
- Guarda la información del usuario autenticado.  
- Administra el **crédito del usuario**.  

### **`products.ts` (store de productos)**  
- Obtiene los productos desde Firebase.  
- Administra las operaciones de CRUD para administradores.  

### **`cart.ts` (store del carrito)**  
- Añade y elimina productos del carrito.  
- Procesa la **compra**, actualizando el **crédito** y el **stock**.  

---

## **6. Estilos y Diseño**  
- **Paleta de colores:** Predomina el **rosa** con un fondo **violeta**.  
- **Botones:** Todos son **rosados** con estilos de Bootstrap.  
- **Diseño responsivo:** Adaptado para dispositivos móviles.  

---

## **7. Pruebas Unitarias**  
Se han implementado **tests con Vitest** para validar:  
 Que los productos se renderizan correctamente.  
 Que los botones de agregar al carrito y comprar funcionan.  
 Que el Navbar muestra el **crédito del usuario**.  
 Que los productos aparecen correctamente en la página principal.  

---

## **8. Conclusión**  
Este proyecto implementa **buenas prácticas de desarrollo con Vue 3 y TypeScript**, asegurando un código modular, escalable y con **pruebas unitarias**.