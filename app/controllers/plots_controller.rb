class PlotsController < ApplicationController
  before_action :set_plot, only: [:show, :update, :destroy]

  # GET /plots
  def index
    plots = Plot.all

    render json: plots, include: ["plants"]
  end

  # GET /plots/1
  def show
    plot = Plot.find(params[:id])
    render json: plot
  end

  # POST /plots
  def create
    plot = Plot.new(plot_params)

    if plot.save
      render json: plot, status: :created, location: plot
    else
      render json:  {error: "plot name taken"}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plots/1
  def update
    if plot.update(plot_params)
      render json: plot
    else
      render json: {error: "plot name taken"}, status: :unprocessable_entity
    end
  end

  # DELETE /plots/1
  def destroy
    plot = Plot.find(params[:id])
    plot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plot
     plot = Plot.find( params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plot_params
      params.permit(:name, :length, :width, :sun, :garden_id)
    end
end
