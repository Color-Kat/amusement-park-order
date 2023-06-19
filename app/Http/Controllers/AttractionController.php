<?php

namespace App\Http\Controllers;

use App\Http\Requests\Attraction\StoreAttractionRequest;
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
    public function index()
    {
        return Attraction::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
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
     * @param StoreAttractionRequest $request
     * @return JsonResponse
     */
    public function store(StoreAttractionRequest $request)
    {
        $data = $request->all();

        if (!$data['_image']) $data['image'] = '';

        // Create base part
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
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Attraction::query()
            ->where('id', $id)
            ->delete();
    }
}
