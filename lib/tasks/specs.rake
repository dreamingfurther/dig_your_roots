if defined?(RSpec)
  namespace :specs do
    desc "Run all React tests"
    task frontend: :environment do
      system('npm test -- --single-run')
    end
  end
end
