import React from 'react'

const InventoryTable = () => {
  return (
    <>
    <h4>Inventory Items</h4>
    <table>
        <thead>
            <tr>
                <td>Name:</td>
                <td>Catagory:</td>
                <td>Price:</td>
                <td>Quantity:</td>
                <td>Value:</td>
                <td>Action:</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Beef</td>
                <td>Meat</td>
                <td>1000000</td>
                <td>a bunch</td>
                <td>less than price</td>
                <td>
                    <button>View</button>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default InventoryTable