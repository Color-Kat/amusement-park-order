<?php

namespace App\Http\Controllers;

use App\Http\Requests\Attraction\CURDAttractionRequest;
use App\Models\Attraction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AttractionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request)
    {
        $query = Attraction::query()->orderByDesc('id');

        $limit = $request->get('limit');
        if($limit) $query->limit($limit);

        return $query->get();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object
     */
    public function show($id)
    {
        return Attraction::query()
            ->where('id', $id)
            ->first();
    }

    /* ----- Admin routes ----- */

    /**
     * Store a newly created resource in storage.
     *
     * @param CURDAttractionRequest $request
     * @return JsonResponse
     */
    public function store(CURDAttractionRequest $request)
    {
        $data = $request->all();

        if (!$data['_image']) $data['image'] = '';

        // Create attraction
        $result = Attraction::create($data);

        // Set image
        if ($data['_image']) $result->updateImage($data['_image'], 'attractions');

        return response()->json([
            'status' => 201,
            'data' => $result
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CURDAttractionRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(CURDAttractionRequest $request, $id)
    {
        $data = $request->all([
            'name', 'description', 'restrictions', 'price'
        ]);

        $attraction = Attraction::query()->where('id', $id)->first();

        // Update attraction
        $result = $attraction->update($data);

        // Set image
        $newImage = $request->file('_image');
        if ($newImage) $attraction->updateImage($newImage, 'attractions');

        return response()->json([
            'status' => 200,
            'data' => $result
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Attraction::query()
            ->where('id', $id)
            ->delete();
    }
}
