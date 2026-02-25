---
title: 📈 Dashboard Ejecutivo Integrado
description: Consolidación histórica y modelado analítico unificado tras migración tecnológica hacia Dynamics 365.
publishDate: 'Feb 24 2026'
featured: true
image:
  src: '/images/dashboard-ejecutivo-cover.jpg'
  alt: Dashboard ejecutivo con KPIs estratégicos
tags: ['Power BI', 'Modelado Estrella', 'DAX', 'Dataverse', 'Business Intelligence']
---

## Contexto

El proyecto se desarrolló en un momento de transformación tecnológica dentro del sector. La organización decidió migrar desde un esquema de gestión basado en Planner hacia Dynamics 365 (Dataverse), buscando mayor trazabilidad, automatización y escalabilidad operativa.

Sin embargo, el cambio de herramienta planteaba un problema inmediato: ¿cómo preservar la historia del sector y mantener la comparabilidad de indicadores cuando el modelo de datos, los estados y los criterios operativos ya no eran los mismos?

El nuevo dashboard debía servir tanto a mandos medios —que necesitaban monitoreo diario— como a dirección, que requería una lectura estratégica mensual. No se trataba simplemente de visualizar datos, sino de reconstruir un sistema de medición coherente tras una transición estructural.

---

## El desafío

Antes del proyecto, gran parte del seguimiento se realizaba mediante múltiples archivos Excel. Cada área podía manejar criterios ligeramente distintos y la consolidación exigía trabajo manual constante. El foco de los mandos medios estaba dividido entre liderar equipos y verificar planillas.

Con la migración a Dynamics, la estructura de datos cambió. Los estados se redefinieron, los procesos evolucionaron y ciertos indicadores dejaron de ser comparables de forma directa con el histórico.

Integrar ambos mundos sin distorsionar la lectura estratégica requería algo más que un simple cruce de tablas: necesitaba rediseñar el modelo analítico desde su base conceptual.

---

## Enfoque y construcción del modelo

El primer paso fue trabajar sobre el histórico proveniente de Planner. Se realizó un proceso de limpieza, normalización y adaptación conceptual para que pudiera convivir con la nueva estructura de Dataverse. No se trataba de copiar datos, sino de reinterpretarlos bajo el nuevo marco operativo.

Una vez alineadas las definiciones, se diseñó un modelo analítico en esquema estrella dentro de Power BI. Se consolidó una tabla de hechos que integraba histórico y operación actual, acompañada por dimensiones normalizadas —tiempo, agente, estado y tipología— que permitieran análisis consistentes y escalables.

La incorporación de una tabla calendario formalizó el análisis temporal y permitió desarrollar métricas interanuales reales, evitando distorsiones generadas por el cambio de sistema.

Las medidas en DAX no solo calcularon indicadores básicos, sino que incorporaron reglas de negocio explícitas que reflejaban la lógica operativa del sector.

---

## De visualización a herramienta de gestión

El dashboard no se concibió como un panel estático, sino como una herramienta activa de evaluación.

Se implementó una lógica de semaforización basada en objetivos y desempeño, permitiendo ajustar escalas según demanda operativa y metas estratégicas. Esto habilitó una evaluación más justa y contextualizada del rendimiento de los agentes.

La visualización permitió que los mandos medios dejaran de invertir tiempo en validar cifras y pudieran enfocarse en liderar, acompañar y mejorar procesos.

---

## Arquitectura

Planner (Histórico adaptado)  
↓  
Dataverse / Dynamics 365 (Operación actual)  
↓  
Modelo analítico en esquema estrella  
↓  
KPIs y reglas de negocio en DAX  
↓  
Dashboard Ejecutivo en Power BI Service  

---

## 🖼 Espacio para imágenes

_Subir las imágenes a:_  
`/public/images/`

### Vista general ejecutiva

![Vista Ejecutiva](/images/dashboard-ejecutivo-overview.jpg)

---

### Análisis por agente

![Light straight lines](../../assets/images/proyecto3a.jpg)

---

### Semaforización estratégica

![Light straight lines](../../assets/images/proyecto3a.jpg)

---

## Tecnologías utilizadas

Power BI Service  
DAX  
Dataverse (Dynamics 365)  
Planner  
Modelado analítico en esquema estrella  

---

## Impacto

La implementación redujo significativamente el tiempo dedicado a tareas manuales de consolidación y verificación, eliminando la dependencia de múltiples planillas y criterios dispersos.

Más importante aún, permitió estabilizar el sistema de indicadores en medio de una transición tecnológica, consolidando una gestión basada en métricas consistentes y comparables.

El resultado fue un cambio cultural: los mandos medios dejaron de operar como validadores de Excel para consolidarse como líderes enfocados en desempeño, calidad y crecimiento del sector.
