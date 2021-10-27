require "test_helper"

class PlotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @plot = plots(:one)
  end

  test "should get index" do
    get plots_url, as: :json
    assert_response :success
  end

  test "should create plot" do
    assert_difference('Plot.count') do
      post plots_url, params: { plot: { garden_id: @plot.garden_id, length: @plot.length, name: @plot.name, sun: @plot.sun, width: @plot.width } }, as: :json
    end

    assert_response 201
  end

  test "should show plot" do
    get plot_url(@plot), as: :json
    assert_response :success
  end

  test "should update plot" do
    patch plot_url(@plot), params: { plot: { garden_id: @plot.garden_id, length: @plot.length, name: @plot.name, sun: @plot.sun, width: @plot.width } }, as: :json
    assert_response 200
  end

  test "should destroy plot" do
    assert_difference('Plot.count', -1) do
      delete plot_url(@plot), as: :json
    end

    assert_response 204
  end
end
