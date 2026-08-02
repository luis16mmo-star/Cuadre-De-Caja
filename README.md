# Cuadre de Caja 💰

Una aplicación móvil para gestionar y calcular la caja de tu turno de trabajo de forma fácil y rápida.

## Características

✅ **Inicio de Turno**
- Registra la caja inicial
- Hora de inicio automática
- Datos del empleado

✅ **Registro de Ingresos**
- Efectivo
- Tarjeta de crédito/débito
- Transferencias bancarias
- Otros métodos de pago

✅ **Registro de Descuadres**
- Gastos operacionales
- Faltantes de caja
- Devoluciones
- Otros descuentos

✅ **Resumen en Tiempo Real**
- Total de ingresos por tipo
- Total de descuadres
- Diferencia esperada vs real
- Porcentaje de precisión

✅ **Historial de Turnos**
- Ver turnos anteriores
- Detalles completos
- Tendencias y estadísticas

✅ **Reportes**
- Exportar a PDF
- Compartir reportes
- Estadísticas diarias/semanales

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/luis16mmo-star/Cuadre-de-caja.git
cd Cuadre-de-caja
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia la aplicación:
```bash
npm start
# o
yarn start
```

4. Abre en tu dispositivo:
- **iOS**: Presiona `i`
- **Android**: Presiona `a`
- **Web**: Presiona `w`

## Estructura del Proyecto

```
cuadre-de-caja/
├── src/
│   ├── screens/          # Pantallas de la app
│   ├── components/       # Componentes reutilizables
│   ├── services/         # Servicios y lógica
│   ├── navigation/       # Configuración de navegación
│   ├── styles/           # Estilos y temas
│   └── utils/            # Funciones utilitarias
├── assets/               # Imágenes y recursos
├── App.js               # Componente principal
└── package.json         # Dependencias
```

## Tecnologías

- **React Native** - Framework para apps móviles
- **Expo** - Plataforma para desarrollo
- **React Navigation** - Navegación entre pantallas
- **AsyncStorage** - Almacenamiento local
- **Moment.js** - Manejo de fechas
- **React Native Picker** - Selectores

## Uso

### 1. Iniciar Turno
- Ingresa el monto inicial de caja
- La app registra automáticamente la hora

### 2. Registrar Ingresos
- Selecciona el tipo de pago
- Ingresa el monto
- Agrega una descripción (opcional)

### 3. Registrar Descuadres
- Selecciona el tipo de descuadre
- Ingresa el monto
- Guarda automáticamente

### 4. Ver Resumen
- Totales por tipo de pago
- Diferencia de caja
- Historial de transacciones

### 5. Cerrar Turno
- Ingresa el monto final
- Revisa las discrepancias
- Genera reportes

## Contribuir

Si quieres contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT.

## Autor

**Luis MMO** - [GitHub](https://github.com/luis16mmo-star)

## Soporte

Si tienes preguntas o encuentras un bug, por favor abre un [issue](https://github.com/luis16mmo-star/Cuadre-de-caja/issues).
