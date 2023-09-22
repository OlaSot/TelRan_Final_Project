import React from 'react'

export default function SortForm() {
  return (
    <div>
        <label>
            <p>Sorted:</p>
            <select name="" >
                <option value="title">By alphabet A-Z</option>
                <option value="price_asc">By price ASC</option>
                <option value="price_desc">By price DESC</option>
            </select>
        </label>
    </div>
  )
}
