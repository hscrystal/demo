<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Read all products
        return Product::all();
    }

    public function store(Request $request)
    {

            // Validate form
            $request->validate([
                'name' => 'required|min:3',
                'slug' => 'required',
                'price' => 'required'
            ]);

            // กำหนดตัวแปรรับค่าจากฟอร์ม
            $data_product = array(
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'slug' => $request->input('slug'),
                'price' => $request->input('price'),
                //'user_id' => $user->id
                'user_id' => '1'
            );

            // Create data to tabale product
            return Product::create($data_product);

    }

    public function show($id)
    {
        return Product::find($id)->users();
    }

    //public function update(Request $request, Product $product)
    public function update(Request $request, $id)
    {

            $request->validate([
                'name' => 'required',
                'slug' => 'required',
                'price' => 'required'
            ]);

            $data_product = array(
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'slug' => $request->input('slug'),
                'price' => $request->input('price'),
                'user_id' => $user->id
            );

            $product = Product::find($id);
            $product->update($data_product);

            return $product;
    }

    //public function destroy(Product $product)
    public function destroy($id)
    {
        return Product::destroy($id);
    }
}
