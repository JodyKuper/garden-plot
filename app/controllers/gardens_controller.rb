class GardensController < ApplicationController
  before_action :set_garden, only: [:show, :update, :destroy]

  # GET /gardens
  def index
    gardens = Garden.all.with_attached_image

    render json: gardens, include: ["image", "plots.plants"]
  end

  # GET /gardens/1
  def show
    garden = Garden.with_attached_image.find(params[:id])

    render json: garden
  end

  # POST /gardens
  def create

    user=User.find_by(id:session[:user_id])
    garden = Garden.new(garden_params)
    garden.user_id=user.id
    if garden.save
      render json: garden, status: :created
    else
      render json: {error: "file needed"}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gardens/1
  def update
    if garden.update(garden_params)
      render json: garden
    else
      render json: garden.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gardens/1
  def destroy
    garden.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_garden
      garden = Garden.with_attached_image.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def garden_params
      params.permit(:season, :user_id, :image, plots_attributes: [:name])
    end
end
