import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Tickets() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    ticket_type: 'General Pass',
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const ticketOptions = [
    { title: 'General Pass', priceVal: 250000, price: '$250,000 COP', desc: 'Entry to all general stages and activity areas.' },
    { title: 'VIP Experience', priceVal: 500000, price: '$500,000 COP', desc: 'Fast entry, private front-stage area, and free drinks.' },
    { title: 'Camping Pass', priceVal: 150000, price: '$150,000 COP', desc: 'Tent spot for the night (requires General or VIP pass).' },
  ];

  // Función para obtener el precio numérico según el tipo seleccionado
  const getSelectedPrice = () => {
    const option = ticketOptions.find((t) => t.title === formData.ticket_type);
    return option ? option.priceVal : 250000;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');

    const calculatedTotal = getSelectedPrice() * formData.quantity;

    // Payload adaptado con los nombres estándar que recibe tu backend en Django
    const payload = {
      name: formData.full_name, // Si en tu backend el campo se llama 'name' o 'full_name'
      full_name: formData.full_name,
      email: formData.email,
      ticket_type: formData.ticket_type,
      quantity: formData.quantity,
      total_amount: calculatedTotal,
      order_id: Math.floor(100000 + Math.random() * 900000), // ID único para el correo
    };

    try {
      const res = await fetch('https://lumina-backend-api-yue6.onrender.com/api/tickets/buy/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setSuccessMsg('¡Compra exitosa! Te hemos enviado un correo de confirmación a tu Gmail.');
        setFormData({ full_name: '', email: '', ticket_type: 'General Pass', quantity: 1 });
      } else {
        const errorData = await res.json().catch(() => ({}));
        setSuccessMsg(`Error en el registro: ${errorData.detail || 'Verifica los datos e intenta de nuevo.'}`);
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg('Conectando con el servidor... Recuerda que Render puede tardar ~30s en iniciar si estaba inactivo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tickets" className="py-24 px-4 bg-black/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            BUY YOUR <span className="text-neonBlue">TICKETS</span>
          </h2>
          <p className="text-gray-400">Simulated Purchase saved directly to Django Rest Framework</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ticketOptions.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.title}</h3>
                <p className="text-3xl font-extrabold text-neonBlue mb-4">{t.price}</p>
                <p className="text-gray-300 text-sm mb-6">{t.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, ticket_type: t.title })}
                className={`w-full py-3 rounded-xl border font-semibold transition-colors ${
                  formData.ticket_type === t.title
                    ? 'bg-neonBlue text-black border-neonBlue'
                    : 'border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-black'
                }`}
              >
                {formData.ticket_type === t.title ? 'Selected' : 'Select Option'}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Purchase</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address (Gmail)</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Ticket Type</label>
                <select
                  value={formData.ticket_type}
                  onChange={(e) => setFormData({ ...formData, ticket_type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
                >
                  <option value="General Pass" className="bg-darkBg">General Pass</option>
                  <option value="VIP Experience" className="bg-darkBg">VIP Experience</option>
                  <option value="Camping Pass" className="bg-darkBg">Camping Pass</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-neonBlue"
                />
              </div>
            </div>

            {/* Visualización del total */}
            <div className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-white/10 my-4">
              <span className="text-gray-300 text-sm">Total to Pay:</span>
              <span className="text-xl font-bold text-neonBlue">
                ${(getSelectedPrice() * formData.quantity).toLocaleString()} COP
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-6 rounded-xl font-bold text-black bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Confirm Ticket Purchase'}
            </button>

            {successMsg && (
              <p className="mt-4 text-center text-sm font-semibold text-neonBlue bg-neonBlue/10 py-2 px-4 rounded-lg border border-neonBlue/30">
                {successMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}