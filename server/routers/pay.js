// Importar el módulo Stripe
import Stripe from "stripe";

// Crear una instancia de Stripe y proporcionar la clave de API
const stripe = Stripe('');

// Función para realizar el pago
const pay = async (req, res) => {
  let { amount, id } = req.body;
  try {
    // Crear un pago utilizando el método paymentIntents de Stripe
    const payment = await striper.paymentIntents.create({
      amount,
      currency: 'COP',
      description: 'shop',
      payment_method: id,
      confirm: true
    });

    // Enviar la respuesta de éxito
    res.json({
      message: 'Payment successful',
      success: true
    });
  } catch (error) {
    console.log('error', error);
    // Enviar la respuesta de fallo de pago
    res.json({
      message: 'Payment failed',
      success: false
    });
  }
};

export default pay;
