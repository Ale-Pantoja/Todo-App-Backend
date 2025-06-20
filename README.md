# Aplicación Todo - Backend API

## Tabla de Contenidos

- [Visión General](#visión-general)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Documentación API](#documentación-api)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Visión General <a name="visión-general"></a>

Este proyecto implementa un backend completo para una aplicación de gestión de tareas (Todo App), proporcionando endpoints RESTful para operaciones CRUD con persistencia en PostgreSQL a través de Supabase.

## Tecnologías <a name="tecnologías"></a>
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


**Stack completo:**
- **Runtime:** Node.js 18+
- **Framework:** Express 4.x
- **Base de datos:** PostgreSQL 15+ (via Supabase)
- **Validación:** Zod
- **Variables de entorno:** dotenv
- **Testing:** htttp Yack

## Instalación <a name="instalación"></a>

```bash
# Clonar repositorio
git clone https://github.com/Ale-Pantoja/todo-app-backend.git
cd todo-app-backend

# Instalar dependencias
npm install

# Configurar entorno
cp .env.example .env
```

## Configuración <a name="configuración"></a>

Editar el archivo `.env` con tus credenciales:

```env
# Entorno desarrollo
DATABASE_DEV_URL="postgresql://postgres:password@project-id.supabase.co:5432/postgres"

# Entorno producción
DATABASE_URL="postgresql://postgres:password@project-id.supabase.co:5432/postgres"

# Configuración adicional
PORT=3000
```

## Documentación API <a name="documentación-api"></a>

### Base URL
`http://localhost:3000`

### Endpoints principales

<table style="width: 100%; border-collapse: collapse;">
  <thead style="background-color: #f5f5f5;">
    <tr>
      <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Endpoint</th>
      <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Método</th>
      <th style="padding: 12px; text-align: left; border-bottom: 1px solid #ddd;">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">/tasks</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">POST</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Crear nueva tarea</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">/tasks</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">GET</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Obtener todas las tareas</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">/tasks</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">DELETE</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Eliminar una tarea</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">/:id</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">PUT</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Actualizar una tarea</td>
    </tr>
  </tbody>
</table>

### Ejemplo de petición

```http
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "task": "Completar documentación técnica",
  "isChecked": false
}
```

### Respuesta exitosa (200)

```json
{
  "id": 1,
  "task": "Completar documentación técnica",
  "isChecked": false
}
```

## Despliegue <a name="despliegue"></a>

### Entorno de desarrollo

```bash
npm run dev
```

### Entorno de producción

```bash
npm run build
npm start
```

## Contribución <a name="contribución"></a>

<details>

1. Haz fork del proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

</details>

## Licencia <a name="licencia"></a>

Distribuido bajo licencia MIT. Ver `LICENSE` para más información.

<div align="center" style="margin-top: 40px;">
  <p>© 2025 Alejandra Pantoja | 
  <a href="mailto:alepantojafl@gmail.com">Contacto</a> | 
  <a href="https://github.com/Ale-Pantoja">GitHub</a></p>
</div>
