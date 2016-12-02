module ApplicationHelper
  def strptime(time)
    time.strftime("%Y-%m-%d %l:%M:%S")
  end
end
