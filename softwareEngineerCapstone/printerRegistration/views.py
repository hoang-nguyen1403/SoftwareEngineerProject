from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from django.contrib.auth import authenticate, login
from .forms import LoginForm, UserRegistrationForm, UserEditForm, ProfileEditForm


# Create your views here.


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request,
                                username=cd['username'],
                                password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponse('Authenticated successfully')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'account/login.html', {'form': form})


def register(request):
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            # Create a new user object but avoid saving it yet
            new_user = user_form.save(commit=False)
            # Set the chosen password
            new_user.set_password(
                user_form.cleaned_data['password'])
            # Save the User object
            new_user.save()
            # Create the user profile
            Profile.objects.create(user=new_user)
            return render(request,
                          'account/register_done.html',
                          {'new_user': new_user})
    else:
        user_form = UserRegistrationForm()
    return render(request,
                  'account/register.html',
                  {'user_form': user_form})


@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user,
                                 data=request.POST)
        profile_form = ProfileEditForm(
                                    instance=request.user.profile,
                                    data=request.POST,
                                    files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, 'Profile updated '\
                                      'successfully')
        else:
            messages.error(request, 'Error updating your profile')
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(
                                    instance=request.user.profile)
    return render(request,
                  'account/edit.html',
                  {'user_form': user_form,
                   'profile_form': profile_form})

@login_required
def dashboard(request):
    # all_posts_auto = list(Automation.objects.order_by('created'))
    # all_posts_auto_status = list(AutomationStatus.objects.order_by('created'))
    # all_devices_status = list(ControlPanel.objects.order_by('created'))
    #
    # if len(all_posts_auto) == 0:
    #     return
    # latest_data_auto = all_posts_auto[-1]
    # latest_data_auto_status = all_posts_auto_status[-1]
    # latest_devices_status = all_devices_status[-1]
    return render(request, 'account/dashboard.html',
                  {'section': 'dashboard', } )


@login_required
def home(request):
    # room_conditions = list(RoomCondition.objects.order_by('created'))
    # if len(room_conditions) == 0:
    #     return
    # chart_data_processor = ChartDataProcessor(room_conditions)
    # latest_data = chart_data_processor.get_latest_data()
    #
    # time, temperatures, soilmoistures, light_intensities = chart_data_processor.get_chart_data()
    #
    # all_actions = list(ControlPanel.objects.order_by('created'))
    # notification_processor = NotificationProcessor(all_actions)
    #
    # notification_list = notification_processor.get_notification_list()
    # # print(notification_list)
    #
    # paginator = Paginator(notification_list, 3)
    # page_number = request.GET.get('page', 1)
    # rendering_notification_list = paginator.page(page_number)

    return render(request, 'account/home.html', {
        'section': 'home',
        # 'latest_data': latest_data,
        # 'notifications': rendering_notification_list,
        # 'time':time,
        # 'temperatures':temperatures,
        # 'soilmoistures':soilmoistures,
        # 'light_intensities':light_intensities,
    } )