export default function FilterSidebar() {
  return (
    <aside className="border rounded-xl p-6 space-y-6 bg-white">
      <h2 className="font-semibold text-lg">Filters</h2>

      <div>
        <label className="block text-sm mb-2">Price range</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option>Any</option>
          <option>Under $300k</option>
          <option>$300k – $600k</option>
          <option>$600k+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-2">Bedrooms</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-2">Property type</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option>Any</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Townhome</option>
        </select>
      </div>
    </aside>
  );
}
