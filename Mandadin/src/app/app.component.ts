import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    storage.get('productList').then((data) => {
      if (data == null) {
        storage.set('productList', [
              {
                categoria: "Aceites y grasas",
                visible: true,
                productos: 
                [
                  {nombre: 'Aceite', activo: false, eliminar: false},
                  {nombre: 'Aceite de oliva', activo: false, eliminar: false},
                  {nombre: 'Grasa comestible', activo: false, eliminar: false},
                  {nombre: 'Manteca', activo: false, eliminar: false},
                  {nombre: 'Manteca de cerdo', activo: false, eliminar: false},
                  {nombre: 'Margarina', activo: false, eliminar: false},
                  {nombre: 'Minarina', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Bebidas",
                visible: true,
                productos: 
                [
                  {nombre: 'Agua con gas', activo: false, eliminar: false},
                  {nombre: 'Agua sin gas', activo: false, eliminar: false},
                  {nombre: 'Bebida hidratante', activo: false, eliminar: false},
                  {nombre: 'Cerveza', activo: false, eliminar: false},
                  {nombre: 'Jerez', activo: false, eliminar: false},
                  {nombre: 'Jugo de fruta', activo: false, eliminar: false},
                  {nombre: 'Refresco', activo: false, eliminar: false},
                  {nombre: 'Rompope', activo: false, eliminar: false},
                  {nombre: 'Sidra', activo: false, eliminar: false},
                  {nombre: 'Vino de mesa', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Café, endulzantes y saborizantes",
                visible: true,
                productos: 
                [
                  {nombre: 'Azúcar', activo: false, eliminar: false},
                  {nombre: 'Café soluble', activo: false, eliminar: false},
                  {nombre: 'Café tostado y molido', activo: false, eliminar: false},
                  {nombre: 'Jarabe p/preparar bebidas', activo: false, eliminar: false},
                  {nombre: 'Miel de abeja', activo: false, eliminar: false},
                  {nombre: 'Piloncillo', activo: false, eliminar: false},
                  {nombre: 'Polvo p/preparar bebidas', activo: false, eliminar: false},
                  {nombre: 'Te', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Carnes",
                visible: true,
                productos: 
                [
                  {nombre: 'Bistec de diezmillo de res', activo: false, eliminar: false},
                  {nombre: 'Bistec de espaldilla de res', activo: false, eliminar: false},
                  {nombre: 'Cabeza de cerdo', activo: false, eliminar: false},
                  {nombre: 'Carnes molida de cerdo', activo: false, eliminar: false},
                  {nombre: 'Carnes molida de res', activo: false, eliminar: false},
                  {nombre: 'Cerdo', activo: false, eliminar: false},
                  {nombre: 'Chuleta ahumada de cerdo', activo: false, eliminar: false},
                  {nombre: 'Chuleta de res', activo: false, eliminar: false},
                  {nombre: 'Espinazo de cerdo', activo: false, eliminar: false},
                  {nombre: 'Falda de res', activo: false, eliminar: false},
                  {nombre: 'Filete de res', activo: false, eliminar: false},
                  {nombre: 'Hígado de res', activo: false, eliminar: false},
                  {nombre: 'Lomo de cerdo', activo: false, eliminar: false},
                  {nombre: 'Milanesa de cerdo', activo: false, eliminar: false},
                  {nombre: 'Milanesa de res', activo: false, eliminar: false},
                  {nombre: 'Panza de res', activo: false, eliminar: false},
                  {nombre: 'Pata de cerdo', activo: false, eliminar: false},
                  {nombre: 'Pavo', activo: false, eliminar: false},
                  {nombre: 'Pechuga de pollo', activo: false, eliminar: false},
                  {nombre: 'Pierna ce cerdo entera/ pernil', activo: false, eliminar: false},
                  {nombre: 'Pierna de pollo', activo: false, eliminar: false},
                  {nombre: 'Pollo', activo: false, eliminar: false},
                  {nombre: 'Pollo entero', activo: false, eliminar: false},
                  {nombre: 'Res', activo: false, eliminar: false},
                  {nombre: 'Retazo hueso de res', activo: false, eliminar: false},
                  {nombre: 'Ternera', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Cereales",
                visible: true,
                productos: 
                [
                  {nombre: 'Arroz', activo: false, eliminar: false},
                  {nombre: 'Avena', activo: false, eliminar: false},
                  {nombre: 'Cereal mixto', activo: false, eliminar: false},
                  {nombre: 'Harina de arroz', activo: false, eliminar: false},
                  {nombre: 'Otros cereales', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Condimentos y aderezos",
                visible: true,
                productos: 
                [
                  {nombre: 'Ajonjolí', activo: false, eliminar: false},
                  {nombre: 'Canela', activo: false, eliminar: false},
                  {nombre: 'Chilorio', activo: false, eliminar: false},
                  {nombre: 'Clavo', activo: false, eliminar: false},
                  {nombre: 'Cochinita pibil', activo: false, eliminar: false},
                  {nombre: 'Concentrado de pollo', activo: false, eliminar: false},
                  {nombre: 'Condimento de achiote', activo: false, eliminar: false},
                  {nombre: 'Hojas de perejil', activo: false, eliminar: false},
                  {nombre: 'Mayonesa', activo: false, eliminar: false},
                  {nombre: 'Mole rojo en pasta', activo: false, eliminar: false},
                  {nombre: 'Mostaza', activo: false, eliminar: false},
                  {nombre: 'Pimienta', activo: false, eliminar: false},
                  {nombre: 'Polvo p/hornear', activo: false, eliminar: false},
                  {nombre: 'Sal', activo: false, eliminar: false},
                  {nombre: 'Sal molida de mesa', activo: false, eliminar: false},
                  {nombre: 'Salsa', activo: false, eliminar: false},
                  {nombre: 'Salsa catsup', activo: false, eliminar: false},
                  {nombre: 'Salsa de chile', activo: false, eliminar: false},
                  {nombre: 'Salsa de soya', activo: false, eliminar: false},
                  {nombre: 'Salsa inglesa', activo: false, eliminar: false},
                  {nombre: 'Salsa mexicana', activo: false, eliminar: false},
                  {nombre: 'Salsa picante', activo: false, eliminar: false},
                  {nombre: 'Sopa y crema', activo: false, eliminar: false},
                  {nombre: 'Vainilla', activo: false, eliminar: false},
                  {nombre: 'Vinagre', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Dulces y golosinas",
                visible: true,
                productos: 
                [
                  {nombre: 'Cajeta', activo: false, eliminar: false},
                  {nombre: 'Chocolate en tablillas', activo: false, eliminar: false},
                  {nombre: 'Colación', activo: false, eliminar: false},
                  {nombre: 'Flan', activo: false, eliminar: false},
                  {nombre: 'Gelatina en polvo', activo: false, eliminar: false},
                  {nombre: 'Peladillas', activo: false, eliminar: false},
                  {nombre: 'Polvo bebida sabor chocolate', activo: false, eliminar: false},
                  {nombre: 'Polvorón', activo: false, eliminar: false},
                  {nombre: 'Postre estilo flan', activo: false, eliminar: false},
                  {nombre: 'Praline', activo: false, eliminar: false},
                  {nombre: 'Torta Imperial', activo: false, eliminar: false},
                  {nombre: 'Turrón', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Legumbres secas",
                visible: true,
                productos: 
                [
                  {nombre: 'Chile', activo: false, eliminar: false},
                  {nombre: 'Chile seco', activo: false, eliminar: false},
                  {nombre: 'Frijol', activo: false, eliminar: false},
                  {nombre: 'Garbanza', activo: false, eliminar: false},
                  {nombre: 'Haba', activo: false, eliminar: false},
                  {nombre: 'Lenteja', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Pan y derivados del trigo",
                visible: true,
                productos: 
                [
                  {nombre: 'Bolillo', activo: false, eliminar: false},
                  {nombre: 'Cereales', activo: false, eliminar: false},
                  {nombre: 'Galletas', activo: false, eliminar: false},
                  {nombre: 'Galletas dulces', activo: false, eliminar: false},
                  {nombre: 'Galletas populares', activo: false, eliminar: false},
                  {nombre: 'Harina de trigo', activo: false, eliminar: false},
                  {nombre: 'Harina hot cakes', activo: false, eliminar: false},
                  {nombre: 'Pan de caja', activo: false, eliminar: false},
                  {nombre: 'Pan tostado', activo: false, eliminar: false},
                  {nombre: 'Pasta para sopa', activo: false, eliminar: false},
                  {nombre: 'Pastelillos', activo: false, eliminar: false},
                  {nombre: 'Tortilla de harina de trigo', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Pescados y mariscos",
                visible: true,
                productos: 
                [
                  {nombre: 'Almeja', activo: false, eliminar: false},
                  {nombre: 'Atún', activo: false, eliminar: false},
                  {nombre: 'Bacalao', activo: false, eliminar: false},
                  {nombre: 'Blanco Nilo', activo: false, eliminar: false},
                  {nombre: 'Boquerón', activo: false, eliminar: false},
                  {nombre: 'Calamar', activo: false, eliminar: false},
                  {nombre: 'Callo de hacha', activo: false, eliminar: false},
                  {nombre: 'Camarón', activo: false, eliminar: false},
                  {nombre: 'Carpa', activo: false, eliminar: false},
                  {nombre: 'Cazón', activo: false, eliminar: false},
                  {nombre: 'Charal', activo: false, eliminar: false},
                  {nombre: 'Cintilla', activo: false, eliminar: false},
                  {nombre: 'Curvina', activo: false, eliminar: false},
                  {nombre: 'Gurrubata', activo: false, eliminar: false},
                  {nombre: 'Huachinango', activo: false, eliminar: false},
                  {nombre: 'Jaiba', activo: false, eliminar: false},
                  {nombre: 'Langosta', activo: false, eliminar: false},
                  {nombre: 'Langostino', activo: false, eliminar: false},
                  {nombre: 'Lenguado', activo: false, eliminar: false},
                  {nombre: 'Lisa', activo: false, eliminar: false},
                  {nombre: 'Lobina', activo: false, eliminar: false},
                  {nombre: 'Mero', activo: false, eliminar: false},
                  {nombre: 'Mojarra', activo: false, eliminar: false},
                  {nombre: 'Pámpano', activo: false, eliminar: false},
                  {nombre: 'Pescado seco salado', activo: false, eliminar: false},
                  {nombre: 'Pulpo', activo: false, eliminar: false},
                  {nombre: 'Robalo', activo: false, eliminar: false},
                  {nombre: 'Salmón', activo: false, eliminar: false},
                  {nombre: 'Sardina', activo: false, eliminar: false},
                  {nombre: 'Sierra', activo: false, eliminar: false},
                  {nombre: 'Trucha', activo: false, eliminar: false},
                  {nombre: 'Villajaiba', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Frutas y verduras",
                visible: true,
                productos: 
                [
                  {nombre: 'Acelga', activo: false, eliminar: false},
                  {nombre: 'Aguacate', activo: false, eliminar: false},
                  {nombre: 'Ajo', activo: false, eliminar: false},
                  {nombre: 'Alcachofa', activo: false, eliminar: false},
                  {nombre: 'Alcaparra', activo: false, eliminar: false},
                  {nombre: 'Almendras', activo: false, eliminar: false},
                  {nombre: 'Apio', activo: false, eliminar: false},
                  {nombre: 'Avellana', activo: false, eliminar: false},
                  {nombre: 'Betabel', activo: false, eliminar: false},
                  {nombre: 'Brócoli', activo: false, eliminar: false},
                  {nombre: 'Cacahuates', activo: false, eliminar: false},
                  {nombre: 'Calabaza', activo: false, eliminar: false},
                  {nombre: 'Caña', activo: false, eliminar: false},
                  {nombre: 'Castañas', activo: false, eliminar: false},
                  {nombre: 'Cebolla', activo: false, eliminar: false},
                  {nombre: 'Champiñón', activo: false, eliminar: false},
                  {nombre: 'Chayote', activo: false, eliminar: false},
                  {nombre: 'Chícharos', activo: false, eliminar: false},
                  {nombre: 'Chile fresco', activo: false, eliminar: false},
                  {nombre: 'Chiles', activo: false, eliminar: false},
                  {nombre: 'Chiles gueros', activo: false, eliminar: false},
                  {nombre: 'Ciruela', activo: false, eliminar: false},
                  {nombre: 'Ciruela pasa', activo: false, eliminar: false},
                  {nombre: 'Col', activo: false, eliminar: false},
                  {nombre: 'Coliflor', activo: false, eliminar: false},
                  {nombre: 'Dátil', activo: false, eliminar: false},
                  {nombre: 'Durazno', activo: false, eliminar: false},
                  {nombre: 'Ejote', activo: false, eliminar: false},
                  {nombre: 'Elote', activo: false, eliminar: false},
                  {nombre: 'Espinacas', activo: false, eliminar: false},
                  {nombre: 'Fresa', activo: false, eliminar: false},
                  {nombre: 'Frijoles', activo: false, eliminar: false},
                  {nombre: 'Frutas cubiertas', activo: false, eliminar: false},
                  {nombre: 'Granada', activo: false, eliminar: false},
                  {nombre: 'Guanábana', activo: false, eliminar: false},
                  {nombre: 'Guayaba', activo: false, eliminar: false},
                  {nombre: 'Jamaica', activo: false, eliminar: false},
                  {nombre: 'Jícama', activo: false, eliminar: false},
                  {nombre: 'Jitomate', activo: false, eliminar: false},
                  {nombre: 'Kiwi', activo: false, eliminar: false},
                  {nombre: 'Lechuga', activo: false, eliminar: false},
                  {nombre: 'Lima', activo: false, eliminar: false},
                  {nombre: 'Limón', activo: false, eliminar: false},
                  {nombre: 'Mamey', activo: false, eliminar: false},
                  {nombre: 'Mandarina', activo: false, eliminar: false},
                  {nombre: 'Mango', activo: false, eliminar: false},
                  {nombre: 'Manzana', activo: false, eliminar: false},
                  {nombre: 'Melón', activo: false, eliminar: false},
                  {nombre: 'Naranja', activo: false, eliminar: false},
                  {nombre: 'Nopal', activo: false, eliminar: false},
                  {nombre: 'Nopalitos', activo: false, eliminar: false},
                  {nombre: 'Nuez', activo: false, eliminar: false},
                  {nombre: 'Orejón', activo: false, eliminar: false},
                  {nombre: 'Papa', activo: false, eliminar: false},
                  {nombre: 'Papaya', activo: false, eliminar: false},
                  {nombre: 'Pasa (Uva pasa)', activo: false, eliminar: false},
                  {nombre: 'Pepino', activo: false, eliminar: false},
                  {nombre: 'Pera', activo: false, eliminar: false},
                  {nombre: 'Pimiento', activo: false, eliminar: false},
                  {nombre: 'Piña', activo: false, eliminar: false},
                  {nombre: 'Plátano', activo: false, eliminar: false},
                  {nombre: 'Rábano', activo: false, eliminar: false},
                  {nombre: 'Romeritos', activo: false, eliminar: false},
                  {nombre: 'Sandía', activo: false, eliminar: false},
                  {nombre: 'Tamarindo', activo: false, eliminar: false},
                  {nombre: 'Tejocote', activo: false, eliminar: false},
                  {nombre: 'Tomate', activo: false, eliminar: false},
                  {nombre: 'Toronja', activo: false, eliminar: false},
                  {nombre: 'Tuna', activo: false, eliminar: false},
                  {nombre: 'Uva', activo: false, eliminar: false},
                  {nombre: 'Verdolaga', activo: false, eliminar: false},
                  {nombre: 'Zanahoria', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Alimentos procesados",
                visible: true,
                productos: 
                [
                  {nombre: 'Aceituna', activo: false, eliminar: false},
                  {nombre: 'Aceituna manzanilla', activo: false, eliminar: false},
                  {nombre: 'Aceituna rellena con pimiento', activo: false, eliminar: false},
                  {nombre: 'Alimento preparado p/niños', activo: false, eliminar: false},
                  {nombre: 'Chícharos en lata', activo: false, eliminar: false},
                  {nombre: 'Chiles en lata', activo: false, eliminar: false},
                  {nombre: 'Chiles largos en escabeche', activo: false, eliminar: false},
                  {nombre: 'Coctel de frutas en almíbar', activo: false, eliminar: false},
                  {nombre: 'Duraznos en almíbar', activo: false, eliminar: false},
                  {nombre: 'Hortalizas congeladas', activo: false, eliminar: false},
                  {nombre: 'Mango en almíbar', activo: false, eliminar: false},
                  {nombre: 'Mermelada', activo: false, eliminar: false},
                  {nombre: 'Pera en almíbar', activo: false, eliminar: false},
                  {nombre: 'Piña en almíbar', activo: false, eliminar: false},
                  {nombre: 'Puré de tomate', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Lácteos y huevo",
                visible: true,
                productos: 
                [
                  {nombre: 'Crema', activo: false, eliminar: false},
                  {nombre: 'Crema batida', activo: false, eliminar: false},
                  {nombre: 'Fórmula láctea', activo: false, eliminar: false},
                  {nombre: 'Huevo', activo: false, eliminar: false},
                  {nombre: 'Leche condensada', activo: false, eliminar: false},
                  {nombre: 'Leche en polvo', activo: false, eliminar: false},
                  {nombre: 'Leche evaporada', activo: false, eliminar: false},
                  {nombre: 'Leche pasteurizada', activo: false, eliminar: false},
                  {nombre: 'Leche ultrapasteurizada', activo: false, eliminar: false},
                  {nombre: 'Mantequilla', activo: false, eliminar: false},
                  {nombre: 'Queso canasto', activo: false, eliminar: false},
                  {nombre: 'Queso chihuahua', activo: false, eliminar: false},
                  {nombre: 'Queso cotija', activo: false, eliminar: false},
                  {nombre: 'Queso doble crema', activo: false, eliminar: false},
                  {nombre: 'Queso manchego', activo: false, eliminar: false},
                  {nombre: 'Queso panela', activo: false, eliminar: false},
                  {nombre: 'Queso sierra', activo: false, eliminar: false},
                  {nombre: 'Yoghurt', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Salchichonería",
                visible: true,
                productos: 
                [
                  {nombre: 'Chorizo', activo: false, eliminar: false},
                  {nombre: 'Jamón', activo: false, eliminar: false},
                  {nombre: 'jamòn de pavo', activo: false, eliminar: false},
                  {nombre: 'Longaniza', activo: false, eliminar: false},
                  {nombre: 'Mortadela', activo: false, eliminar: false},
                  {nombre: 'Pastel pimiento', activo: false, eliminar: false},
                  {nombre: 'Paté', activo: false, eliminar: false},
                  {nombre: 'Queso de puerco', activo: false, eliminar: false},
                  {nombre: 'Salami', activo: false, eliminar: false},
                  {nombre: 'Salchicha', activo: false, eliminar: false},
                  {nombre: 'Tocino', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Tortillas y maíz",
                visible: true,
                productos: 
                [
                  {nombre: 'Harina de maíz', activo: false, eliminar: false},
                  {nombre: 'Maíz pozolero', activo: false, eliminar: false},
                  {nombre: 'Tortilla de maíz', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Ferretería",
                visible: true,
                productos: 
                [
                  {nombre: 'Foco', activo: false, eliminar: false},
                  {nombre: 'Pilas eléctricas', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Cuidado personal",
                visible: true,
                productos: 
                [
                  {nombre: 'Acondicionador', activo: false, eliminar: false},
                  {nombre: 'Champú', activo: false, eliminar: false},
                  {nombre: 'Champú para bebés', activo: false, eliminar: false},
                  {nombre: 'Crema dental', activo: false, eliminar: false},
                  {nombre: 'Crema líquida', activo: false, eliminar: false},
                  {nombre: 'Crema sólida', activo: false, eliminar: false},
                  {nombre: 'Desodorante', activo: false, eliminar: false},
                  {nombre: 'Jabon de tocador', activo: false, eliminar: false},
                  {nombre: 'Pañales desechables', activo: false, eliminar: false},
                  {nombre: 'Papel higiénico', activo: false, eliminar: false},
                  {nombre: 'Rastrillos desechables', activo: false, eliminar: false},
                  {nombre: 'Repuestos de navajas', activo: false, eliminar: false},
                  {nombre: 'Tinte para el cabello', activo: false, eliminar: false},
                  {nombre: 'Toalla femenina', activo: false, eliminar: false},
                  {nombre: 'Toallita húmeda limpiadora', activo: false, eliminar: false}
                ]
              },
              {
                categoria: "Limpieza del hogar",
                visible: true,
                productos: 
                [
                  {nombre: 'Acondicionador de telas', activo: false, eliminar: false},
                  {nombre: 'Barra limpiadora', activo: false, eliminar: false},
                  {nombre: 'Blanqueador', activo: false, eliminar: false},
                  {nombre: 'Detergente ropa', activo: false, eliminar: false},
                  {nombre: 'Detergente ropa líquido', activo: false, eliminar: false},
                  {nombre: 'Detergente ropa polvo', activo: false, eliminar: false},
                  {nombre: 'Detergente trastes', activo: false, eliminar: false},
                  {nombre: 'Insecticida aerosol', activo: false, eliminar: false},
                  {nombre: 'Jabón de pasta', activo: false, eliminar: false},
                  {nombre: 'Jabón limpiador', activo: false, eliminar: false},
                  {nombre: 'Limpiador líquido', activo: false, eliminar: false},
                  {nombre: 'Limpiador lìquido piso', activo: false, eliminar: false},
                  {nombre: 'Servilletas de papel', activo: false, eliminar: false},
                  {nombre: 'Suavizante ropa', activo: false, eliminar: false},
                  {nombre: 'Toalla de papel', activo: false, eliminar: false}
                ]
              }	
          ]);
      }
    });
  }
}
