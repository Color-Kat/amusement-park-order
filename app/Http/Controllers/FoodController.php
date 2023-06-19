<?php

namespace App\Http\Controllers;

use App\Http\Requests\Food\CURDFoodRequest;
use App\Models\Food;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request)
    {
        $query = Food::query()->orderByDesc('id');

        $limit = $request->get('limit');
        if($limit) $query->limit($limit);

        return $query->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object
     */
    public function show($id)
    {
        return Food::query()
            ->where('id', $id)
            ->first();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CURDFoodRequest $request
     * @return JsonResponse
     */
    public function store(CURDFoodRequest $request)
    {
        $data = $request->all();

        if (!$data['_image']) $data['image'] = '';

        // Create food
        $result = Food::create($data);

        // Set image
        if ($data['_image']) $result->updateImage($data['_image'], 'foods');

        return response()->json([
            'status' => 201,
            'data' => $result
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CURDFoodRequest  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(CURDFoodRequest $request, $id)
    {
        $data = $request->all([
            'name', 'description', 'price'
        ]);

        $attraction = Food::query()->where('id', $id)->first();

        // Update food
        $result = $attraction->update($data);

        // Set image
        $newImage = $request->file('_image');
        if ($newImage) $attraction->updateImage($newImage, 'foods');

        return response()->json([
            'status' => 200,
            'data' => $result
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Food::query()
            ->where('id', $id)
            ->delete();
    }
}
