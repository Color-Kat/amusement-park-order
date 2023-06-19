<?php

namespace App\Http\Requests\Attraction;

use App\Http\Requests\BaseApiFormRequest;
use Illuminate\Foundation\Http\FormRequest;

class StoreAttractionRequest extends BaseApiFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'restrictions' => 'string|nullable',
            'price' => 'required|integer',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Название',
            'description' => 'Описание',
            'restrictions' => 'Ограничение',
            'price' => 'Цена',
        ];
    }
}
