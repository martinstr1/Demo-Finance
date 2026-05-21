'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ESTADOS_MEXICO } from '@/lib/estados';

const PRODUCTOS = [
  { value: '', label: 'Selecciona un producto' },
  { value: 'tarjeta', label: 'Tarjeta de Crédito DD' },
  { value: 'cuenta', label: 'Cuenta de Ahorro DD' },
  { value: 'hipoteca', label: 'Hipoteca DD' },
];

const RANGOS_INGRESO = [
  { value: '', label: 'Selecciona tu rango de ingreso' },
  { value: '0-10000', label: 'Menos de $10,000 MXN/mes' },
  { value: '10000-20000', label: '$10,000 – $20,000 MXN/mes' },
  { value: '20000-40000', label: '$20,000 – $40,000 MXN/mes' },
  { value: '40000-80000', label: '$40,000 – $80,000 MXN/mes' },
  { value: '80000+', label: 'Más de $80,000 MXN/mes' },
];

export default function SolicitudForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productoParam = searchParams.get('producto') || '';

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    producto: productoParam,
    ingreso: '',
    estado: '',
    terminos: false,
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { id, value, type, checked } = e.target;
    const field = id.replace('campo-', '');
    setForm((prev) => ({ ...prev, [field]: type === 'checkbox' ? checked : value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate() {
    const errs = {};
    if (!form.nombre.trim()) errs.nombre = 'El nombre es obligatorio.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Ingresa un correo válido.';
    if (!form.telefono.trim() || form.telefono.replace(/\D/g, '').length < 10)
      errs.telefono = 'Ingresa un número de 10 dígitos.';
    if (!form.producto) errs.producto = 'Selecciona un producto.';
    if (!form.ingreso) errs.ingreso = 'Selecciona tu rango de ingreso.';
    if (!form.estado) errs.estado = 'Selecciona tu estado.';
    if (!form.terminos) errs.terminos = 'Debes aceptar los términos y condiciones.';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    router.push('/gracias');
  }

  return (
    <form id="form-solicitud" onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nombre */}
      <div>
        <label htmlFor="campo-nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          id="campo-nombre"
          type="text"
          placeholder="Ej. María García López"
          value={form.nombre}
          onChange={handleChange}
          className={`input-field ${errors.nombre ? 'border-red-400' : ''}`}
        />
        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="campo-email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico <span className="text-red-500">*</span>
        </label>
        <input
          id="campo-email"
          type="email"
          placeholder="maria@ejemplo.com"
          value={form.email}
          onChange={handleChange}
          className={`input-field ${errors.email ? 'border-red-400' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="campo-telefono" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono (10 dígitos) <span className="text-red-500">*</span>
        </label>
        <input
          id="campo-telefono"
          type="tel"
          placeholder="55 1234 5678"
          value={form.telefono}
          onChange={handleChange}
          className={`input-field ${errors.telefono ? 'border-red-400' : ''}`}
        />
        {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
      </div>

      {/* Producto */}
      <div>
        <label htmlFor="campo-producto" className="block text-sm font-medium text-gray-700 mb-1">
          Producto de interés <span className="text-red-500">*</span>
        </label>
        <select
          id="campo-producto"
          value={form.producto}
          onChange={handleChange}
          className={`input-field ${errors.producto ? 'border-red-400' : ''}`}
        >
          {PRODUCTOS.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
        {errors.producto && <p className="text-red-500 text-xs mt-1">{errors.producto}</p>}
      </div>

      {/* Ingreso */}
      <div>
        <label htmlFor="campo-ingreso" className="block text-sm font-medium text-gray-700 mb-1">
          Ingreso mensual estimado <span className="text-red-500">*</span>
        </label>
        <select
          id="campo-ingreso"
          value={form.ingreso}
          onChange={handleChange}
          className={`input-field ${errors.ingreso ? 'border-red-400' : ''}`}
        >
          {RANGOS_INGRESO.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
        {errors.ingreso && <p className="text-red-500 text-xs mt-1">{errors.ingreso}</p>}
      </div>

      {/* Estado */}
      <div>
        <label htmlFor="campo-estado" className="block text-sm font-medium text-gray-700 mb-1">
          Estado de residencia <span className="text-red-500">*</span>
        </label>
        <select
          id="campo-estado"
          value={form.estado}
          onChange={handleChange}
          className={`input-field ${errors.estado ? 'border-red-400' : ''}`}
        >
          <option value="">Selecciona tu estado</option>
          {ESTADOS_MEXICO.map((est) => (
            <option key={est} value={est}>{est}</option>
          ))}
        </select>
        {errors.estado && <p className="text-red-500 text-xs mt-1">{errors.estado}</p>}
      </div>

      {/* Términos */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id="campo-terminos"
            type="checkbox"
            checked={form.terminos}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-brand-blue"
          />
          <span className="text-sm text-gray-700">
            Acepto el{' '}
            <span className="text-brand-blue underline cursor-pointer">Aviso de Privacidad</span>
            {' '}y los{' '}
            <span className="text-brand-blue underline cursor-pointer">Términos y Condiciones</span>
            {' '}de DD Finance. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.terminos && <p className="text-red-500 text-xs mt-1">{errors.terminos}</p>}
      </div>

      <button
        id="btn-submit"
        type="submit"
        className="w-full btn-primary text-center py-4 text-base"
      >
        Enviar Solicitud
      </button>

      <p className="text-xs text-gray-400 text-center">
        Un asesor te contactará en menos de 24 horas hábiles.
      </p>
    </form>
  );
}
