class PlantsController < ApplicationController
  before_action :set_plant, only: [:show, :update, :destroy]

  # GET /plants
  def index
    plants = Plant.all

    render json: plants
  end

  # GET /plants/1
  def show
    render json: plant
  end

  # POST /plants
  def create
    
    # plot=Plot.find-by(params[:id])
    plant = Plant.new(plant_params)
    # plant.plot=plot.id

    if plant.save
      render json: plant, status: :created, location: plant
    else
      render json: {error: "need plant"}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plants/1
  def update
    if plant.update(plant_params)
      render json: plant
    else
      render json: plant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plants/1
  def destroy
    plant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant
      plant = Plant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_params
      params.require(:plant).permit(:name, :date_planted, :date_harvested, :need_sun, :image_url, :plot_id, image: [])
    end
end
