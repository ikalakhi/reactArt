export default function Input({ label, invalid, ...props }) {

    let labelClass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inpuClasse = 'w-full px-3 py-2 leading-tight border rounded shadow';

    if(invalid) {
        labelClass += ' text-red-400';
        inpuClasse += ' text-red-400 bg-red-300 border-red-300';
    } else {
        labelClass += ' text-stone-300';
        inpuClasse += ' text-gray-700 bg-stone-300';
    }

    if(inpuClasse) {
    } else {
    }

    return (
      <p>
        <label className={labelClass}>{label}</label>
        <input className={inpuClasse} {...props} />
      </p>
    );
  }